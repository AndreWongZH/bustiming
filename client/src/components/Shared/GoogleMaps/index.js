import React, { Component } from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';

const StyledDiv = styled.div`
  height: 100vh;
  width: 100%;
`;

class Gmap extends Component {
  static defaultProps = {
    center: { lat: 1.388198, lng: 103.746134},
    zoom: 11
  }

  render() {
    return (
      <StyledDiv>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCBvIfx8tz3SefokchHBSgoIcpzdW4ukY8' }}
          defaultCenter={ this.props.center }
          defaultZoom={ this.props.zoom }
          yesIWantToUseGoogleMapApiInternals
        >
          <div>Hello</div>
        </GoogleMapReact>
      </StyledDiv>
    )
  }
}

export default Gmap;