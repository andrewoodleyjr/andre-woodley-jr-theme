const body = document.body;
const retrievedValue = getData("useDarkTheme");

function saveData(key, value) {
  // Saving data to local storage
  try {
    localStorage.setItem(key, value);
  } catch (e) {
    // console.error('Error saving data to local storage:', e);
  }
}

function getData(key) {
  // Retrieving data from local storage
  try {
    const value = localStorage.getItem(key);
    if (value === null) {
      // console.log('No data found for the given key');
      return null;
    }
    return value;
  } catch (e) {
    // console.error('Error retrieving data from local storage:', e);
  }
}

function useDarkTheme(bool) {
  if (bool) {
    body.classList.add("dark-mode");
    saveData("useDarkTheme", true);
  } else {
    body.classList.remove("dark-mode");
    saveData("useDarkTheme", false);
  }
}

function initiateThemeSettings() {
  try {
    if (retrievedValue === "true"
    ) { // user has previously selected dark mode
      useDarkTheme(true);
      document.getElementById("toggle").checked = true;
    } else if (
      retrievedValue === null &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) { // User prefers dark mode and has not selected a preference
      useDarkTheme(true);
      document.getElementById("toggle").checked = true;
    } else { // User prefers light mode or has not selected a preference
      useDarkTheme(false);
      document.getElementById("toggle").checked = false;
    }
  } catch (e) {}
}
initiateThemeSettings();

document.addEventListener("DOMContentLoaded", function () {
  initiateThemeSettings(); // Initiate the theme settings again to include the toggle switch

  document.getElementById("toggle").addEventListener("change", (e) => {
    if (e.target.checked) {
      useDarkTheme(true); // Code to execute when the toggle is switched to the moon
    } else {
      useDarkTheme(false); // Code to execute when the toggle is switched back to the sun
    }
  });
});
