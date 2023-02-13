import React, {useState} from "react";
import {Clock} from "./Clock";

export default {
    title: 'Clock'
}

export const Example = () => {
    const [date, setDate] = useState(new Date())

return <Clock/>
}