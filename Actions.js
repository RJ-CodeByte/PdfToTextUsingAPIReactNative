export const SET_FILE = 'SET_FILE';
export const SET_STATUS = 'SET_STATUS';
export const IS_LOADING ='IS_LOADING';

const API_URL = 'http://api.rest7.com/v1/pdf_to_text.php?layout=0';

export const uploadFileAPI = fileToUpload => {
  try {
    return async dispatch => {
      const data = new FormData();
      //   console.log(fileToUpload.uri);
      data.append('file', fileToUpload);
      data.append('Content-Type', 'application/pdf');
      dispatch({
        type: IS_LOADING,
        payload: true,
      });
      const result = await fetch(API_URL, {
        method: 'POST',
        body: data,
        headers: {
          'Content-Type': 'multipart/form-data; ',
        },
      });
      
      let responseJson = await result.json();
      console.log(responseJson);
      
      dispatch({
        type: IS_LOADING,
        payload: false,
      });

      if (responseJson.success==1) {
        dispatch({
          type: SET_FILE,
          payload: responseJson.file,
        });
        dispatch({
            type: SET_STATUS,
            payload: responseJson.success,
          });
    }else{
        dispatch({
          type: SET_STATUS,
          payload: responseJson.success,
        });
    }
    };
  } catch (error) {
    console.log(error);
  }
};
