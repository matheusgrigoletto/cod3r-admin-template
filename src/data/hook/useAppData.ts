import React from "react";

import AppContext from "~data/context/AppContext";

const useAppData = () => React.useContext(AppContext);

export default useAppData;
