import React from "react";
import { Button, Box } from "@mui/material";
import { InputChatFileld } from "./InputChatField";
import { ListMessages } from "./ListMessages";

export const App = () => {
  return (
    <div style={styleApp}>
		<Box sx={{
			display: 'flex',
			flexDirections: 'column'
		}}>
			<ListMessages message={["AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                "BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
                "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC",
				"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                "BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
                "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC",
				"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                "BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
                "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC",
				"BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
                "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC",
				"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                "BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
                "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC",
				"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                "BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
                "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC"]}/>
			<Box
				sx={{
					width: "100%",
					position: "absolute",
					bottom: "0",
					display: "flex",
					justifyContent: "center",
				}}
			>
				<InputChatFileld
					style={styleInputChatField}
					defaultText="Input Message"
				/>
				<Button 
					variant="contained" 
					style={styleEnterBtn}>
					Enter
				</Button>
			</Box>
		</Box>
     
    </div>
  );
};

const styleApp: React.CSSProperties = {
  backgroundColor: "#ededeb",
  position: "relative",
  width: "100%",
  height: "97vh",
};

const styleInputChatField: React.CSSProperties = {
  width: "40%",
  height: "7vh",
};

const styleEnterBtn: React.CSSProperties = {
  width: "10%",
  height: "7vh",
};
