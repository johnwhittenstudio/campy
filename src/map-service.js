export default class MapService {
  static getMap(lat,lon) {

    return fetch(`https://maps.locationiq.com/v3/staticmap?key=pk.4ce97d411fc5a10dda9888272f18f372&center=${lat},${lon}&zoom=10`)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return `https://maps.locationiq.com/v3/staticmap?key=pk.4ce97d411fc5a10dda9888272f18f372&center=${lat},${lon}&zoom=10`;
      })
      .catch(function(error) {
        return Error(error);
      });
  }
}