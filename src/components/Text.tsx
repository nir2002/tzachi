import styled from "styled-components"

interface Props {
  lineHeight: number
  fontSize: number
}

const StyledText = styled.div(
  (props: Props) => `
  text-align: right;
  line-height: ${props.lineHeight};
  margin-left: 10px;
  font-size: ${props.fontSize}px;
`
)

export default StyledText
