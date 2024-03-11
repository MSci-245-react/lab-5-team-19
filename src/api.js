import axios from 'axios';
const client = axios.create({
  baseURL: 'https://api.outsidein.dev/vvgZbdq5rflv5SkwgFC0Ie1lr7TyTMum',
});
const api = {
  async loadRestaurants() {
    const response = await client.get('/restaurants');
    return response.data;
  },
};
export default api;
