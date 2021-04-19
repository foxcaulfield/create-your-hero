import React from "react";

export default class DownloaderUploader extends React.Component {
  constructor(props) {
    super(props);
    
    const defaultFileType = "json"; 
    this.fileNames = {
      json: `${props.hero.name}.json`,
      // csv: "hero.csv",
      // text: "hero.txt"
    };    
    this.state = {
      fileType: defaultFileType,
      fileDownloadUrl: null,
      status: "",
      data: props.hero //===========set data from props================================================
      // {
      //   name: "Frodo",
      //   id: 1,
      //   baseParameters:{
      //     strength: 2,
      //     agility: 5,
      //     intelligence: 3,
      //     charisma: 4,
      //   },
      //   calculatedParameters:{
      //     vitality: 5, // base = 3 + strength; action kick vitality -= 1;
      //     dodge: 15, // base = 10 + agility
      //     energy: 8 // base = agility + intelligence
      //   },
      //   skills:{
      //     strength:{
      //       attack: 2
      //     },
      //     agility:{
      //       stealth: 5,
      //       archery: 0
      //     },
      //     intelligence:{
      //       educability:2,
      //       survivability:1,
      //       healing:0
      //     },
      //     charisma:{
      //       intimidation: 0,
      //       insight: 2,
      //       appearance: 2,
      //       manipulation: 0
      //     }
      //   },
      // }
      
    };
    this.changeFileType = this.changeFileType.bind(this);
    this.download = this.download.bind(this);
    this.upload = this.upload.bind(this);
    this.openFile = this.openFile.bind(this);
  }
  
  changeFileType (event) {
    const value = event.target.value;
    this.setState({fileType: value});
  }
  
  download (event) {
    event.preventDefault();
    // Prepare the file
    let output;
    if (this.state.fileType === "json") {
      // output = JSON.stringify({hero: this.state.data}, 
      output = JSON.stringify({hero: this.props.hero}, //=====set object value======================================================
        null, 4);
    } 
    // else if (this.state.fileType === "csv"){
    //   // Prepare data:
    //   let contents = [];
    //   contents.push (["State", "Electors"]);
    //   this.state.data.forEach(row => {
    //     contents.push([row.state, row.electors]);
    //   });
    //   output = this.makeCSV(contents);
    // } 
    // else if (this.state.fileType === "text"){
    //   // Prepare data:
    //   output = "";
    //   this.state.data.forEach(row => {
    //     output += `${row.state}: ${row.electors}\n`;
    //   });
    // }
    // Download it
    const blob = new Blob([output]);
    const fileDownloadUrl = URL.createObjectURL(blob);
    this.setState ({fileDownloadUrl: fileDownloadUrl}, 
      () => {
        this.dofileDownload.click(); 
        URL.revokeObjectURL(fileDownloadUrl);  // free up storage--no longer needed.
        this.setState({fileDownloadUrl: ""});
      });    
  }

  /**
   * Function returns the content as a CSV string
   * See https://stackoverflow.com/a/20623188/64904
   * Parameter content:
   *   [
   *.     [header1, header2],
   *.     [data1, data2]
   *.     ...
   *.  ]
   * NB Does not support Date items
   */
  // makeCSV (content) {
  //   let csv = "";
  //   content.forEach(value => {
  //     value.forEach((item, i) => {
  //       let innerValue = item === null ? "" : item.toString();
  //       let result = innerValue.replace(/"/g, "\"\"");
  //       if (result.search(/("|,|\n)/g) >= 0) {
  //         result = "\"" + result + "\"";
  //       }
  //       if (i > 0) {csv += ",";}
  //       csv += result;
  //     });
  //     csv += "\n";
  //   });
  //   return csv;
  // }
  
  upload(event) {//====================add EVENT to props=======================================
    // console.log(event);
    event.preventDefault();
    this.dofileUpload.click();
  }
  
  /**
   * Process the file within the React app. We're NOT uploading it to the server!
   */
  openFile(evt) {
    // let status = []; // Status output
    const fileObj = evt.target.files[0];
    const reader = new FileReader();
          
    let fileloaded = e => {
      // console.log(JSON.parse(e.target.result).hero);
      const uploadedHero = JSON.parse(e.target.result).hero; //=============get and parse result ==============================================
      // e.target.result is the file's content as text

      //=== set and show status(optional) ===
      // const fileContents = e.target.result;
      // status.push(`File name: "${fileObj.name}". Length: ${fileContents.length} bytes.`);
      // // Show first 80 characters of the file
      // const first80char = fileContents.substring(0,80);
      // status.push (`First 80 characters of the file:\n${first80char}`);
      // this.setState ({status: status.join("\n")});

      this.props.handleSetUploadedHero(this.props.hero.id, uploadedHero);//=============add hero to state ==============================================
    };
      
    // Mainline of the method
    fileloaded = fileloaded.bind(this);
    reader.readAsText(fileObj);  
    reader.onload = fileloaded;
  }
  
  render() {
    return (
      <div>
        <h2>You can download and upload your hero</h2>
        {/* <table>
          <thead>
          <tr><th>State</th><th>Electors</th></tr>
          </thead>
          <tbody>
          {this.state.data.map(item => (
            <tr key={item.state}>
              <td>{item.state}</td><td>{item.electors}</td>
            </tr>
          ))}          
        	</tbody>
        </table> */}
        <form>
          <span hidden className="mr">File type:</span> 
          <select hidden name="fileType" //========add HIDDEN attribute===================================================
            onChange={this.changeFileType}
            value={this.state.fileType}
            className="mr"
          >
            {/* <option value="csv">CSV</option> */}
            <option value="json">JSON</option>
            {/* <option value="text">Text</option> */}
          </select>
          
          <button onClick={this.download}>
            Download the hero!
          </button>
          
          <a hidden
            download={this.fileNames[this.state.fileType]} //========add HIDDEN attribute===================================================
            href={this.state.fileDownloadUrl}
            ref={e=>this.dofileDownload = e}
          >download it</a>
          
          <p><button onClick={this.upload}>
            Upload the hero!
          </button> Only json files are ok.</p>

          <input hidden type="file" className="hidden" //==============add HIDDEN attribute=============================================
            multiple={false}
            accept=".json,application/json"
            onChange={evt => this.openFile(evt)}
            ref={e=>this.dofileUpload = e}
          />
        </form>
        {/* <pre className="status">{this.state.status}</pre> //============== for status of uploading check ============ */}
      </div>
    );
  }
}

