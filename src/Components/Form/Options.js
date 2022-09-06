import React, { useState, useId } from "react";

const Options = props => {
       return props.logNum.map(e => {
            return (
                <option key={e}>{e}</option>
            )
        })
}

export default Options;