export default (type) => {
  return (payload, error, analyticsEventType, analyticsEventPayload) => {
    const ret = {
      type,
      payload,
      error
    };
    if (analyticsEventType) {
      ret.meta = {
        analytics: {
          type: analyticsEventType,
          payload: analyticsEventPayload
        }
      };
    }
    return ret;
  };
};
