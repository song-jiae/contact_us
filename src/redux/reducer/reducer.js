const initialState = {
  contact: [],
  keyword: "", //keyword초기값 추가
};
const contactReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case "ADD_CONTACT":
      state.contact.push({
        name: payload.name,
        phoneNumber: payload.phoneNumber,
      });
      break;
    case "SEARCH_USERNAME": 
    //케이스 추가
    //SearchBox에서 보낸 action값을 받아옴
      state.keyword = payload.keyword; 
      break;
  }
  return { ...state };
};

export default contactReducer;