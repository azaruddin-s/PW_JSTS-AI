let days = "Monday"

switch (days) {

    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        console.log(`This is Weekdays and its Working day`);
        break;
    case "Saturday":
    case "Sunday":
        console.log(`This is Weekend and its holiday`);
        break;

    default:
        console.log("Please input correct Week days")


}