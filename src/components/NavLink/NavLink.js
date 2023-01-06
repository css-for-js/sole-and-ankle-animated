
import styled from 'styled-components/macro';
import { WEIGHTS } from '../../constants';

const NavLink = ({ children, ...delegated }) => {
  return (
    <Wrapper {...delegated}>
      <MainText>{children}</MainText>
      <HoverText>{children}</HoverText>
    </Wrapper>

  );
};

const Wrapper = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  display: flex;
  flex-direction: column;
  position: relative;
  font-weight: ${WEIGHTS.medium};
  overflow: hidden;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Text = styled.span`
  display: block;

  transform: translateY(var(--translate-from));
  transition: transform 500ms;

  ${Wrapper}:hover & {
    @media(prefers-reduced-motion: no-preference) and (hover: hover) {
      transform: translateY(var(--translate-to));
      transition: transform 250ms;
    }
  }
`;

const MainText = styled(Text)`
  --translate-from: 0%;
  --translate-to: -100%;
`;

const HoverText = styled(Text)`
  font-weight: ${WEIGHTS.bold};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  --translate-from: 100%;
  --translate-to: 0%:
`;


export default NavLink;