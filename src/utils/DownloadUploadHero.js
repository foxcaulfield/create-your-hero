import React from "react";
import classes from "./DownloadUploadHero.module.css";

export default class DownloaderUploader extends React.Component {
  constructor(props) {
    super(props);

    const defaultFileType = "json";
    this.fileNames = {
      json: "hero.json",
      // text: "hero.txt"
    };
    this.state = {
      fileType: defaultFileType,
      fileDownloadUrl: null,
      status: "",
      // data: props.hero //===set data from props===
    };
    this.changeFileType = this.changeFileType.bind(this);
    this.download = this.download.bind(this);
    this.upload = this.upload.bind(this);
    this.openFile = this.openFile.bind(this);
  }

  changeFileType(event) {
    const value = event.target.value;
    this.setState({ fileType: value });
  }

  download(event) {
    event.preventDefault();
    // Prepare the file
    let output;
    if (this.state.fileType === "json") {
      // output = JSON.stringify({hero: this.state.data},
      output = JSON.stringify(
        { hero: this.props.hero }, //===set object value===
        null,
        4
      );
    }

    // Download it
    const blob = new Blob([output]);
    const fileDownloadUrl = URL.createObjectURL(blob);
    this.setState({ fileDownloadUrl: fileDownloadUrl }, () => {
      this.dofileDownload.click();
      URL.revokeObjectURL(fileDownloadUrl); // free up storage--no longer needed.
      this.setState({ fileDownloadUrl: "" });
    });
  }

  upload(event) {
    //=====add event to props=====
    // console.log(event);
    event.preventDefault();
    this.dofileUpload.click();
  }

  openFile(evt) {
    // let status = []; // Status output
    const fileObj = evt.target.files[0];
    const reader = new FileReader();

    let fileloaded = (e) => {
      // console.log(JSON.parse(e.target.result).hero);
      const uploadedHero = JSON.parse(e.target.result).hero; //=====get and parse result =====
      // e.target.result is the file's content

      //=== set and show status(optional) ===
      // const fileContents = e.target.result;
      // status.push(`File name: "${fileObj.name}". Length: ${fileContents.length} bytes.`);
      // // Show first 80 characters of the file
      // const first80char = fileContents.substring(0,80);
      // status.push (`First 80 characters of the file:\n${first80char}`);
      // this.setState ({status: status.join("\n")});

      this.props.handleSetUploadedHero(this.props.hero.id, uploadedHero); //=====add hero to state =====
    };

    // Mainline of the method
    fileloaded = fileloaded.bind(this);
    reader.readAsText(fileObj);
    reader.onload = fileloaded;
  }

  render() {
    return (
      <div className={classes.downloadButtonsContainer}>
        <div className={classes.downloadButtonsInfoContainer}>
          <strong className={classes.downloadButtonsInfo}>
            You can download and upload your hero:
          </strong>
        </div>
        <form className={classes.downloadButtonsWrapper}>
          <span hidden className="mr">
            File type:
          </span>
          <select
            hidden
            name="fileType" //===add hidden attribute===
            onChange={this.changeFileType}
            value={this.state.fileType}
            className="mr"
          >
            <option value="json">JSON</option>
            {/* <option value="text">Text</option> */}
          </select>

          {/* <button onClick={this.download} className={classes.cornerButton}>
            <span>Save to JSON</span>
          </button> */}

          <a
            hidden
            download={this.fileNames[this.state.fileType]} //===add hidden attribute===
            href={this.state.fileDownloadUrl}
            ref={(e) => (this.dofileDownload = e)}
          >
            download it
          </a>
          {/* ---------------- */}
          <br />
          {/* <button onClick={this.upload} className={classes.cornerButton}>
            <span>Upload from JSON</span>
          </button> */}

          <input
            hidden
            type="file"
            className="hidden" //===add hidden attribute===
            multiple={false}
            accept=".json,application/json"
            onChange={(evt) => this.openFile(evt)}
            ref={(e) => (this.dofileUpload = e)}
          />

          {/* =============== */}
          <button
            // disabled={hero.calculatedParameters.vitality === 0}
            onClick={
              this.download
              // alert(`${hero.name} was hit`);
              // props.hitTheHero(hero.id);
            }
            className={classes.cybrBtn}
          >
            SAVE TO JSON
            <span aria-hidden>_</span>
            <span aria-hidden className={classes.cybrBtnGlitch}>
              SAVE TO JSON_
            </span>
            <span aria-hidden className={classes.cybrBtnTag}>
              {/* R25 */}
            </span>
          </button>

          <button
            // disabled={hero.calculatedParameters.vitality === 0}
            onClick={
              this.upload
              // alert(`${hero.name} delete`);
              // props.deleteTheHero(hero.id);
            }
            className={classes.cybrBtn}
          >
            UPLOAD FROM JSON<span aria-hidden>_</span>
            <span aria-hidden className={classes.cybrBtnGlitch}>
              UPLOAD FROM JSON_
            </span>
            <span aria-hidden className={classes.cybrBtnTag}>
              {/* {hero.id} */}
            </span>
          </button>
          {/* =============== */}
        </form>
        {/* <pre className="status">{this.state.status}</pre> //=== for status of uploading check === */}
      </div>
    );
  }
}
