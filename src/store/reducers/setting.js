import { defaultSetting } from "../common";

export default function settingReducer(preState = defaultSetting, action) {
  const { type, data } = action;
  switch (type) {
    // 	case ADD_PERSON:
    // 		return [data,...preState]
    default:
      return preState;
  }
}
