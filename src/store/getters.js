export function changedFormData (state, getters) {
	return (saveObject = null, baseObject = null) => {
		if (saveObject === null) saveObject = state.formSaveObject;
		if (baseObject === null) baseObject = state.formBaseObject;
		const json = {};
		for (let prop in saveObject) {
			if (saveObject.hasOwnProperty(prop)) {
				if (saveObject[prop] !== null && typeof saveObject[prop] === 'object') {
					const obj = getters.changedFormData(saveObject[prop], baseObject[prop]);
					if (Object.keys(obj).length > 0) json[prop] = obj;
					continue;
				}
				if (saveObject[prop] !== baseObject[prop]) {
					json[prop] = saveObject[prop];
				}
			}
		}
		return json;
	};
}

export function getUrlArray (state) {
	// filter out elements that have empty strings
	return state.route.path.split('/').filter(e => e !== '');
}

export function getViewComponents (state, getters) {
	if (state.loading === true) return [];
	const data = state.currentViewData;
	if (typeof data === 'undefined' || data === null) {
		console.error('View data object not found for current url');
		return [];
	}
	return data.components;
}

export function getViewObject (state, getters) {
	return (currentViewObject = state.views, urlIdx = 0) => {
		if (getters.getUrlArray.length === 0) return currentViewObject;

		if (urlIdx === getters.getUrlArray.length - 1) {
			return currentViewObject[getters.getUrlArray[urlIdx]];
		}
		return getters.getViewObject(currentViewObject[getters.getUrlArray[urlIdx]], urlIdx + 1);
	};
}
