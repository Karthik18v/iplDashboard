// Write your code here
import './index.css'
import {Link} from 'react-router-dom'
import {Component} from 'react'

class TeamCard extends Component {
  render() {
    const {eachTeam} = this.props
    const {name, imageUrl, id} = eachTeam
    return (
      <Link
        to={`/team-matches/${id}`}
        style={{textDecoration: 'none', color: 'white'}}
      >
        <li className="team-card-container">
          <img className="team-card-image" src={imageUrl} alt={`${name}`} />
          <p className="team-card-name">{name}</p>
        </li>
      </Link>
    )
  }
}
export default TeamCard
