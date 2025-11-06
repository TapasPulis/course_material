import { students, studentCounter } from "./data.js";
import logger from "./utils.js";
import school from "./extra.js";

const numberOfStudents = studentCounter();

logger(`We currently have ${numberOfStudents} students enrolled at ${school}:`);
logger(`- ${students[0]}`);
logger(`- ${students[1]}`);
logger(`- ${students[2]}`);
