import React from 'react'

class Pet extends React.Component {



  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.name}
            {this.props.pet.gender}
            {this.props.pet.gender === 'female' ? '♀' : '♂'}
            {this.props.pet.type}
            {this.props.pet.age}
            {this.props.pet.weight}
          </a>
          <div className="meta">
            <span className="date">PET TYPE</span>
          </div>
          <div className="description">
            <p>Age: PET AGE</p>
            <p>Weight: PET WEIGHT</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.pet.isAdopted === true ? (<button className="ui disabled button">Already adopted</button>)
            : (<button className="ui primary button"   onClick= { () => this.props.onAdoptPet(this.props.pet.id)}>Adopt pet</button>)}
        </div>
      </div>
    )
  }
}

export default Pet
