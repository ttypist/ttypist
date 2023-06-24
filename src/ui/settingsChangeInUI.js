import Config from "../../include/config.js"
import * as SettingsElement from "../elements/settingsElements.js";

export function changeDynamicSettingsInUI(value) {
	if ( value === "off" ) {
		SettingsElement.setting.dynamic.off.id = "selected";
		SettingsElement.setting.dynamic.on.id = "";
	}	else {
		SettingsElement.setting.dynamic.off.id = "";
		SettingsElement.setting.dynamic.on.id = "selected";
	}
}

export function changeWebsiteThemeInUI(value) {
	if ( value === "dark" ) {
		SettingsElement.websiteTheme.light.id = "";
		SettingsElement.websiteTheme.midnight.id = "";
		SettingsElement.websiteTheme.dark.id = "selected";
	} else if ( value === "midnight" ) {
		SettingsElement.websiteTheme.light.id = "";
		SettingsElement.websiteTheme.midnight.id = "selected";
		SettingsElement.websiteTheme.dark.id = "";
	} else {
		SettingsElement.websiteTheme.light.id = "selected";
		SettingsElement.websiteTheme.midnight.id = "";
		SettingsElement.websiteTheme.dark.id = "";
	}
}

export function changeTapeModeInUI(value) {
	if ( value === "letter" ) {
		SettingsElement.tape.off.id = "";
		SettingsElement.tape.mode.letter.id = "selected";
		SettingsElement.tape.mode.word.id = "";
	} else if ( value === "word" ) {
		SettingsElement.tape.off.id = "";
		SettingsElement.tape.mode.letter.id = "";
		SettingsElement.tape.mode.word.id = "selected";
	} else {
		SettingsElement.tape.off.id = "selected";
		SettingsElement.tape.mode.letter.id = "";
		SettingsElement.tape.mode.word.id = "";
	}
}

export function changeTextInputInUI(value) {
	if ( value === "visible" ) {
		SettingsElement.textInput.hidden.id = "";
		SettingsElement.textInput.visible.id = "selected";
	} else {
		SettingsElement.textInput.hidden.id = "selected";
		SettingsElement.textInput.visible.id = "";
	}
}

export function changeTextScrollInUI(value) {
	if ( value === "smooth" ) {
		SettingsElement.textScroll.abrupt.id = "";
		SettingsElement.textScroll.smooth.id = "selected";
	} else {
		SettingsElement.textScroll.abrupt.id = "selected";
		SettingsElement.textScroll.smooth.id = "";
	}
}

export function changeTextHightlightInUI(value) {
	if ( value === "word" ) {
		SettingsElement.textHighlight.off.id = "";
		SettingsElement.textHighlight.mode.letter.id = "";
		SettingsElement.textHighlight.mode.word.id = "selected";
	} else if ( value === "letter" ) {		
		SettingsElement.textHighlight.off.id = "";
		SettingsElement.textHighlight.mode.letter.id = "selected";
		SettingsElement.textHighlight.mode.word.id = "";
	} else {
		SettingsElement.textHighlight.off.id = "selected";
		SettingsElement.textHighlight.mode.letter.id = "";
		SettingsElement.textHighlight.mode.word.id = "";
	}
}

export function changeFlipTextHightlightInUI(value) {

	if ( value === "on" ) {
		SettingsElement.textHighlight.flip.off.id = "";
		SettingsElement.textHighlight.flip.on.id = "selected";
	} else {
		SettingsElement.textHighlight.flip.off.id = "selected";
		SettingsElement.textHighlight.flip.on.id = "";
	}
}

export function changeTextUnderlineInUI(value) {
	if ( value === "off" ) 	{
		SettingsElement.textUnderline.off.id = "selected";
		SettingsElement.textUnderline.on.id = "";
	} else {
		SettingsElement.textUnderline.off.id = "";
		SettingsElement.textUnderline.on.id = "selected";
	}
}

export function changeTextWhitespaceInUI(value) {
	if ( value === "bullet" ) {
		SettingsElement.textWhitespace.off.id = "";
		SettingsElement.textWhitespace.type.bullet.id = "selected";
		SettingsElement.textWhitespace.type.space.id = "";
		SettingsElement.textWhitespace.type.bar.id = "";
	} else if ( value === "bar" ) {
		SettingsElement.textWhitespace.off.id = "";
		SettingsElement.textWhitespace.type.bullet.id = "";
		SettingsElement.textWhitespace.type.space.id = "";
		SettingsElement.textWhitespace.type.bar.id = "selected";
	} else if ( value === "space" ) {
		SettingsElement.textWhitespace.off.id = "";
		SettingsElement.textWhitespace.type.bullet.id = "";
		SettingsElement.textWhitespace.type.space.id = "selected";
		SettingsElement.textWhitespace.type.bar.id = "";
	} else {
		SettingsElement.textWhitespace.off.id = "selected";
		SettingsElement.textWhitespace.type.bullet.id = "";
		SettingsElement.textWhitespace.type.space.id = "";
		SettingsElement.textWhitespace.type.bar.id = "";
	}
}

export function changeQuickEndInUI(value) {
	if ( value === "off" ) {
		SettingsElement.quickend.off.id = "selected";
		SettingsElement.quickend.on.id = "";
	} else {
		SettingsElement.quickend.off.id = "";
		SettingsElement.quickend.on.id = "selected";
	}
}

export function changeDifficultyInUI(value) {
	if ( value === "expert" ) {
		SettingsElement.difficulty.ease.id = "";
		SettingsElement.difficulty.expert.id = "selected";
		SettingsElement.difficulty.master.id = "";
	} else if ( value === "master" ) {
		SettingsElement.difficulty.ease.id = "";
		SettingsElement.difficulty.expert.id = "";
		SettingsElement.difficulty.master.id = "selected";
	} else {
		SettingsElement.difficulty.ease.id = "selected";
		SettingsElement.difficulty.expert.id = "";
		SettingsElement.difficulty.master.id = "";
	}
}

export function changeConfidenceInUI(value) {
	if ( value === "high" ) {
		SettingsElement.confidence.low.id = "";
		SettingsElement.confidence.high.id = "selected";
		SettingsElement.confidence.peak.id = "";
	}	else if ( value === "peak" ) {
		SettingsElement.confidence.low.id = "";
		SettingsElement.confidence.high.id = "";
		SettingsElement.confidence.peak.id = "selected";
	} else {
		SettingsElement.confidence.low.id = "selected";
		SettingsElement.confidence.high.id = "";
		SettingsElement.confidence.peak.id = "";
	}
}