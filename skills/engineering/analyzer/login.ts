export const whoLogsIn = (user): boolean => {
  if (user.type === "regular") {
    console.log("this is a regular user");
  } else if (user.type === "admin") {
    console.log("this is an admin user");
  } else if (user.type === "super") {
    console.log("this is a super user");
  } else if (user.type === "regular") {
    console.log("this is a regular again");
  }
  return true;
};
