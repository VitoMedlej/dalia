export const loadState = (key:string) => {
    try {
      const serializedState = localStorage.getItem(key);
      if(serializedState === null) {
          return undefined;
      }
      return JSON.parse(serializedState);
    }
    catch (err) {
        return undefined;
    }
  };
  
  export const saveState = (key:string, value:any) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    }
    catch (err) {
        console.log('err: ', err);
  
    }
  };
  export const pushState = (key:string, value:any) => {
    try {   
        const state = loadState(key);
        if (state && Array?.isArray(state)) {
            state.push(value);
            saveState(key,state);
        }
        else {
            saveState(key, [value]);
        }
    }
    catch(e) {
        console.log('e: ', e);

    }
  }