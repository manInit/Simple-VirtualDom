const isEventProp = (prop: string): boolean => prop.startsWith('on')
const getEventName = (propEventName: string): string => propEventName.slice(2).toLowerCase()

const setProp = (propName: string, propValue: string | EventListenerOrEventListenerObject, elem: HTMLElement) => {
  if (isEventProp(propName)) 
    elem.addEventListener(getEventName(propName), propValue as EventListenerOrEventListenerObject)
  else 
    elem.setAttribute(propName, propValue as string)
}

const removeProp = (propName: string, elem: HTMLElement, propValue?: EventListenerOrEventListenerObject) => {
  if (isEventProp(propName) && propValue) elem.removeEventListener(getEventName(propName), propValue)
  else elem.removeAttribute(propName)
}

export { setProp, removeProp, isEventProp }