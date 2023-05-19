import { useState } from "react";
import { connect, useDispatch } from "react-redux";

const App = ({ areNotificationsActive }) => {
  const [isNotificationsActive, setIsNotificationsActive] = useState(false);
  const dispatch = useDispatch();

  /*   functionA = () => {
    this.setState({
      n: !this.state.n,
    });
  }; */
  const toggleNotifications = () => {
    setIsNotificationsActive(!isNotificationsActive);
  };

  /*  functionB = () => {
    this.props.s(this.state);
    if (this.state.n) {
      alert("Se ha guardado la selecciòn de activar las notificaciones");
    } else {
      alert("Se ha guardado la selecciòn de desactivar las notificaciones");
    }
  };
*/

  const saveSettings = () => {
    dispatch({
      type: "SAVE_SETTINGS",
      areNotificationsActive: isNotificationsActive,
    });
    const notificationStatus = isNotificationsActive ? "activar" : "desactivar";
    alert(
      `Se ha guardado la selección de ${notificationStatus} las notificaciones`
    );
  };

  /*

  functionC = () => {
    if (this.state.n) {
      return "Activas";
    } else {
      return "Inactivas";
    }
  }; */

  const getNotificationStatus = () => {
    return isNotificationsActive ? "Activas" : "Inactivas";
  };
  /*

  functionD = () => {
    if (this.state.n) {
      return "Desactivar notificaciones";
    } else {
      return "Activar notificaciones";
    }
  }; */

  const getNotificationButtonLabel = () => {
    return isNotificationsActive
      ? "Desactivar notificaciones"
      : "Activar notificaciones";
  };

  return (
    <div className="teste">
      <h1>
        ¿Desesa recibir notificaciones sobre la serie Rick y Morty en su email?
      </h1>
      <p>
        Status: <b>{getNotificationStatus()}</b>
      </p>
      <br />
      <button onClick={toggleNotifications}>
        {getNotificationButtonLabel()}
      </button>
      <br />
      <br />
      <br />
      <button onClick={saveSettings} className="sa">
        Guardar
      </button>
    </div>
  );
};

/* const state = (state) => {
  return {
    n: state.n,
  };
};
*/

const mapStateToProps = (state) => {
  return {
    areNotificationsActive: state.notifications.areActive,
  };
}; /*

const mdtp = (dispatch) => {
  return {
    s: (ss) => dispatch({ type: "SAVE_SETTINGS", ss }),
  };
}; */

//export default connect(state, mdtp)(App);
export default connect(mapStateToProps)(App);
