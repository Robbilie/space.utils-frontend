
  import fetch from '../core/fetch';

  const helperStorage = {};

  class CCPWGLHelper {

    static typeToGraphic (typeID) {
      return CCPWGLHelper.getGraphicIDs().then(([typeids, graphicids]) => graphicids[typeids[typeID].graphicID].graphicFile);
    }

    static getGraphicIDs () {
      if(!helperStorage.graphicIDs) {
        let cgl = ccpwgl_int();
        helperStorage.graphicIDs = Promise.all([
          fetch(cgl.resMan.BuildUrl("res:/staticdata/typeids.json")).then(res => res.json()),
          fetch(cgl.resMan.BuildUrl("res:/staticdata/graphicids.json")).then(res => res.json())
        ]);
      }
      return helperStorage.graphicIDs;
    }

  }

  export default CCPWGLHelper;
