const dashboardId = '5a34c6c3-b135-453c-951f-aceeba6c8387';

const dashboardOptions = {
  dashboardId: dashboardId,
  container: '#dashboard-container',
  loader: {
    background: '#EEF3F6',
    spinnerColor: '#004CB7',
    spinnerBackground: '#DCDCDC',
    fontColor: '#000000'
  }
}

const loadDashboard = () => {
    Cumulio.addDashboard(dashboardOptions);
}

const loadInsightsPage = async () => {
 loadDashboard();
}

window.onload = async() => {
    console.log("got here");
    loadInsightsPage();
}