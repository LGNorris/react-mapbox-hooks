export const MAPBOX_CONFIG = Object.freeze({
  Minzoom: 7,
  Maxzoom: 17,
  Maxbounds: [[-8.74, 49.85], [1.96, 60.9]],
  Center: [-1.4725, 50.9378],
  Zoom: 7
});

export const MAPBOX_STYLES = Object.freeze({
  Outdoor: 'https://s3-eu-west-1.amazonaws.com/tiles.os.uk/v2/styles/open-zoomstack-outdoor/style.json',
  Road: 'https://s3-eu-west-1.amazonaws.com/tiles.os.uk/v2/styles/open-zoomstack-road/style.json',
  Light: 'https://s3-eu-west-1.amazonaws.com/tiles.os.uk/v2/styles/open-zoomstack-light/style.json',
  Night: 'https://s3-eu-west-1.amazonaws.com/tiles.os.uk/v2/styles/open-zoomstack-night/style.json',
})

export default {
  controls: {
    legendKeys: {
      trace: {
        text: 'Cooperative awareness message trace',
      },
      vehicle: {
        text: 'Message streaming device or vehicle',
      } ,
      rsu: {
        text: 'Roadside unit',
      },
      infra: {
        text: 'Infrastructure'
      }
    },
    style: {
      outdoor: {
        text: 'Outdoor',
      },
      road: {
        text: 'Road',
      } ,
      light: {
        text: 'Light',
      },
      night: {
        text: 'Night'
      }
    }
  }
}