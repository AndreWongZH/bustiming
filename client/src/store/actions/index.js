import axios from '../../Core/Axios';

import {
  SAVE_BUSSTOP,
  REMOVE_BUSSTOP,
  CURRENT_PAGE,
  SAVE_CURRENT_BUSSTOP,
  FAILEDTOSAVE_CURRENT_BUSSTOP,
} from '../constants';

export const saveBusstop = (payload) => {
  return { type: SAVE_BUSSTOP, payload };
};

export const removeBusstop = (payload) => {
  return { type: REMOVE_BUSSTOP, payload };
};

export const setCurrentPage = (payload) => {
  return { type: CURRENT_PAGE, payload };
};

export const getBusstopData = (busstopNumber) => {
  return (dispatch) => {
    axios
      .get('/api/busstopNumber', {
        params: {
          busstopNumber,
        },
      })
      .then((res) => {
        dispatch(BusstopDataSaved(res.data));
      })
      .catch((err) => {
        dispatch(BusstopDataNotSaved(err.message));
      });
  };
};

export const BusstopDataSaved = (data) => {
  return { type: SAVE_CURRENT_BUSSTOP, payload: data };
};

export const BusstopDataNotSaved = (payload) => {
  return { type: FAILEDTOSAVE_CURRENT_BUSSTOP, payload };
};
