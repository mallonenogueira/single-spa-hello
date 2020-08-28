import React, { useRef, useEffect } from "react";
import singleSpa from "single-spa";

const isMounted = (parcel) => parcel && parcel.getStatus() === "MOUNTED";

function Parcel({ rootTag = "div", className, style, component, ...props }) {
  const parcel = useRef();

  if (isMounted(parcel.current)) {
    parcel.current.update({ props });
  }

  useEffect(() => () => parcel.current.unmount(), []);

  return React.createElement(rootTag, {
    className,
    style,
    ref: (element) => {
      if (element && !parcel.current) {
        parcel.current = singleSpa.mountRootParcel(component, {
          domElement: element,
          props,
        });
      }
    },
  });
}

export default React.memo(Parcel);
