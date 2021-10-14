import React from "react";

import AuthContext from "~data/context/AuthContext";

const useAuth = () => React.useContext(AuthContext);

export default useAuth;
