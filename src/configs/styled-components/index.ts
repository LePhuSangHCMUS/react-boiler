import _styled from "styled-components";

let styled = (prefix:any)=>(tag:any) => {
  return _styled(tag).withConfig({ displayName: prefix||"SA" } as any);
};

export default styled;
