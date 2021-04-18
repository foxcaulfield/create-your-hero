import React from "react";
import { connect } from "react-redux";

export const CreateHeroScreen = (props) => {
  return (
    <div>
      we're creating hero here. herohere =)
    </div>
  );
};

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = {
  
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateHeroScreen);
