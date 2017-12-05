const React = require('react');
const queryString = require('query-string');
const PropTypes = require('prop-types');
const api = require('../utils/api');
const Link = require('react-router-dom').Link;
const PlayerPreview = require('./PlayerPreview');
const Loading = require('./Loading');

function Profile(props) {
  var info = props.info;

  return (
    <PlayerPreview avater={info.avatar_url} username={info.login}>
      <div className="space-list-items">
        {info.name && <li>{info.name}</li>}
        {info.location && <li>{info.location}</li>}
        {info.company && <li>{info.company}</li>}
        <li>Followers: {info.followers}</li>
        <li>Following: {info.following}</li>
        <li>Public Repos: {info.public_repos}</li>
        {info.blog && <li><a href={info.blog}>{info.blog}</a></li>}
      </div>
    </PlayerPreview>
  )
}

Profile.PropTypes = {
  profile: PropTypes.object.isRequired
}

function Player(props) {
  return (
    <div>
      <h1 className="header">{props.label}</h1>
      <h3 style={{textAlign: 'center'}}>Score: {props.score}</h3>
      <Profile info={props.profile} />
    </div>
  )
}

Player.PropTypes = {
  label: PropTypes.string.isRequired,
  score: PropTypes.string.isRequired,
  profile: PropTypes.object.isRequired
}

class Results extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      winner: null,
      loser: null,
      error: null,
      loading: true
    }
  }

  componentDidMount() {
    var players = queryString.parse(this.props.location.search);
    api.battle([
      players.playerOneName,
      players.playerTwoName
    ]).then(function(players) {
        if (players === null) {
          return this.setState(function(){
            return {
              loading: false,
              error: 'Looks like there was an error: make sure both players are on github'
            }
          })
        }

        this.setState(function() {
          return {
            winner: players[0],
            loser: players[1],
            error: null,
            loading: false
          }
        });
      }.bind(this));
  }

  render() {
    var winner = this.state.winner;
    var loser = this.state.loser;
    var error = this.state.error;
    var loading = this.state.loading;

    if(loading) {
      return <Loading text="Loading" />
    }

    if(error) {
      return (
        <div>
          <p>{error}</p>
          <Link to="/battle">Reset</Link>
        </div>
      )
    }

    return (
      <div className="row">
        <Player
          label="Winner"
          score = {winner.score}
          profile ={winner.profile}
        />
        <Player
          label="Loser"
          score = {loser.score}
          profile ={loser.profile}
        />
      </div>
    )
  }
}

module.exports = Results;
