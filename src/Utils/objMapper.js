export const updateObjectInArray = (item, objPropName, itemID, newObjProp) => {
    item.map(u => {
        if (u[objPropName] === itemID) {
            return { ...u, ...newObjProp }
        }
        return u;
    })
}