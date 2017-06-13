
  import React from 'react';
  import Link from '../../components/Link';

  class Killmails extends React.Component {

    constructor (props) {
      super(props);
      this.state = {
        data: props.data,
        low_id: Math.min(Number.MAX_VALUE, ...props.data.items.map(killmail => killmail.id))
      };
      console.log("low", this.state.low_id);
    }

    getTimeStr (d) {
      return (d.getUTCHours() < 10 ? "0" : "") + d.getUTCHours() + ":" + (d.getUTCMinutes() < 10 ? "0" : "") + d.getUTCMinutes();
    }

    formatRow (killmail) {
      let victim = killmail.victim;
      let attacker = killmail.attackers.find(attacker => attacker.final_blow);
      let time = new Date(killmail.time);
      return (
        <Link key={`killmail-${killmail.id}`} to={`/killmails/${killmail.id}/`} className="row">
          <div className="column grad col-1">
            <img src={`https://imageserver.eveonline.com/Type/${victim.ship_type.id}_64.png`} alt={victim.ship_type.name} />
            <span className="vertmid">
              <b>{this.getTimeStr(time)}</b>
              <br />
              {killmail.solar_system.name}
            </span>
          </div>
          <div className="column grad col-2">
            <img src={`https://imageserver.eveonline.com/${["alliance", "corporation", "character"].find(e => !!victim[e]).capitalizeFirstLetter()}/${[victim.alliance, victim.corporation, victim.character].find(e => !!e).id}_64.${["alliance", "corporation", "character"].find(e => !!victim[e]) == "character" ? "jpg" : "png"}`} alt={[victim.alliance, victim.corporation, victim.character].find(e => !!e).name} />
            <span>
              <b>{[victim.character, victim.corporation, victim.alliance, victim.faction].find(e => !!e).name}</b>
              <br />
              {[victim.alliance ? `[${victim.corporation.ticker}]` : victim.corporation.name, victim.alliance ? victim.alliance.name : null].filter(e => !!e).join(" | ")}
            </span>
          </div>
          <div className="column grad col-3 deso">
            <img src={`https://imageserver.eveonline.com/${(["alliance", "corporation", "character"].find(e => !!attacker[e]) || "alliance").capitalizeFirstLetter()}/${[attacker.alliance, attacker.corporation, attacker.character, attacker.faction].find(e => !!e).id}_64.${["alliance", "corporation", "character"].find(e => !!attacker[e]) == "character" ? "jpg" : "png"}`} alt={[attacker.alliance, attacker.corporation, attacker.character, attacker.faction].find(e => !!e).name} />
            <span>
              <b>{[attacker.character, attacker.corporation, attacker.alliance, attacker.faction].find(e => !!e).name + (killmail.attackers.length > 1 ? " [+" + (killmail.attackers.length - 1) + "]" : "")}</b>
              <br />
              {[attacker.corporation ? (attacker.alliance ? `[${attacker.corporation.ticker}]` : attacker.corporation.name) : null, attacker.alliance ? attacker.alliance.name : null, attacker.faction && !attacker.character ? attacker.faction.name : null].filter(e => !!e).join(" | ")}
            </span>
          </div>
        </Link>
      );
    }

    render() {
      return (
        <div className="page killmails">
          <div className="kill list">
            {this.state.data.items.map(killmail => this.formatRow(killmail))}
          </div>
        </div>
      );
    }
  }

  export default Killmails;
