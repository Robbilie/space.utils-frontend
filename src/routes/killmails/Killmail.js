
  import React from 'react';
  import Link from '../../components/Link';
  import CCPWGLHelper from '../../utils/CCPWGLHelper';

  class Killmail extends React.Component {

    componentDidMount () {
      console.log("killmail mounted");
      if (typeof(window) !== "undefined") {
        setTimeout(() => this.initWebGl(), 500);
      }
    }

    initWebGl () {
      this.header = document.getElementById(`kill-header-bg-${this.props.data.id}`);
      this.ccpwgl = ccpwgl(ccpwgl_int() || window);

      this.ccpwgl.initialize(this.header, {});
      this.ccpwgl.enablePostprocessing(true);

      this.camera = new TestCamera(this.header);
      this.camera.minDistance = 10;
      this.camera.maxDistance = 10000;
      this.camera.fov = 30;
      this.camera.distance = 5000;
      this.camera.nearPlane = 1;
      this.camera.minPitch = -0.5;
      this.camera.maxPitch = 0.65;

      this.ccpwgl.setCamera(this.camera);

      CCPWGLHelper.typeToGraphic(this.props.data.victim.ship_type.id).then(dna => {
        const page = this;
        this.scene = this.ccpwgl.loadScene(`res:/dx9/scene/universe/${((f) => ["a", "c", "g", "m"].find(c => c == f) || "c")(dna.split(":").slice(-1)[0][0])}09_cube.red`);

        function cameraLookAt(spaceObject, distanceScaler) {
          // The spaceObject must be loaded to get it's bounding sphere data
          if (!spaceObject.isLoaded())
          {
            throw new page.ccpwgl.IsStillLoadingError();
          }

          // Get the space Object's position
          let objectPosition = spaceObject.getTransform().slice(12, 15);

          // Set the camera's point of interest as the space object's position in world space
          vec3.set(objectPosition, page.camera.poi);

          // Get the radius of the space object
          let spaceObjectRadius = parseInt(spaceObject.getBoundingSphere()[1]);

          // Set the camera's minimum distance
          page.camera.minDistance = spaceObjectRadius * 0.8;

          // Set the camera's distance
          page.camera.distance = spaceObjectRadius * distanceScaler;
        }

        // A callback function that is run once the ship's base javascript object has loaded.
        function whenLoaded () {
          cameraLookAt(this, 5)
        }

        if (dna.split(":").length > 2) {
          this.ccpwgl.getSofHullConstructor(dna, (constructor) => {
            console.log(constructor);
            if (constructor) {
              var obj = this.scene[constructor](dna, whenLoaded);
              if ("setBoosterStrength" in obj) {
                obj.setBoosterStrength(1);
              }
            }
          });
        } else {
          this.scene.loadObject(dna, whenLoaded);
        }
      });
    }

    render() {
      return (
        <div className="killmail page">
          <input type="radio" name={`tabs-kill-${this.props.data.id}`} id={`tabs-kill-${this.props.data.id}-1`} value="1" className="tabs-kill-1" defaultChecked />
          <input type="radio" name={`tabs-kill-${this.props.data.id}`} id={`tabs-kill-${this.props.data.id}-2`} value="2" className="tabs-kill-2" />
          <input type="radio" name={`tabs-kill-${this.props.data.id}`} id={`tabs-kill-${this.props.data.id}-3`} value="3" className="tabs-kill-3" />
          <div className="fitting-conti">
            <canvas id={`kill-header-bg-${this.props.data.id}`} className="kill-header-bg" />
            <div className="kill-img-conti">
              <div className="kill-img-wrap">
                <img src="/img/fitting/fittingbase.png" />
              </div>
              <div className="kill-img-wrap">
                <img src="/img/fitting/fittingbase_dotproduct.png" />
              </div>
            </div>
            <div className="kill-header-infolay">
              <div className="kill-header-info" />
              <img src="/img/1x1.png" />
              <div className="kill-header-info" />
            </div>
            <div className="tabs-kill">
              <div className="tab-highlighter" />
              <div className="kill-tab-headline">Items</div>
              <div className="kill-tab-headline">Attackers</div>
              <div className="kill-tab-headline">Stats</div>
              <div className="kill-tab-headline">Comments</div>
              <div className="kill-label-wrapper">
                <label htmlFor={`tabs-kill-${this.props.data.id}-1`} />
                <label htmlFor={`tabs-kill-${this.props.data.id}-2`} />
                <label htmlFor={`tabs-kill-${this.props.data.id}-3`} />
              </div>
            </div>
          </div>
          <div className="tabs-kill-wrap">
            <div className="tabs-kill-conti">
              <div className="tab-kill">
                <div className="tab-kill">
                  {this.props.data.victim.items.map((item, i) =>
                    <div key={this.props.data.id + "-item-" + i} className={item.quantity_destroyed ? "destroyed" : "dropped"}>
                      <img src={`https://imageserver.eveonline.com/Type/${item.item_type.id}_32.png`} />
                      <span>{item.item_type.name}</span>
                      <span>{item.quantity_destroyed || item.quantity_dropped}</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="tab-kill">
                <div className="tab-kill">
                  {this.props.data.attackers.map((attacker, i) =>
                    <div key={this.props.data.id + "-attacker-" + i}>
                      <img src={`https://imageserver.eveonline.com/Type/${attacker.ship_type.id}_32.png`} />
                      <img src={`https://imageserver.eveonline.com/Type/${(attacker.weapon_type || attacker.ship_type).id}_32.png`} />
                      <img src={`https://imageserver.eveonline.com/${(["character", "corporation", "alliance"].find(e => !!attacker[e]) || "alliance").capitalizeFirstLetter()}/${[attacker.character, attacker.corporation, attacker.alliance, attacker.faction].find(e => !!e).id}_32.${["character", "corporation", "alliance"].find(e => !!attacker[e]) == "character" ? "jpg" : "png"}`} />
                      <span>{[attacker.character, attacker.corporation, attacker.alliance, attacker.faction].find(e => !!e).name}</span>
                      <span>{attacker.damage_done || 0}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  export default Killmail;
