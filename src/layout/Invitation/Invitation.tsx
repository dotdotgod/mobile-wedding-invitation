import styled from '@emotion/styled';
import data from 'data.json';
import Host from '../Contact/Host.tsx';
import RoundButton from '@/components/RoundButton.tsx';
import { Caption, Paragraph } from '@/components/Text.tsx';

const Invitation = () => {
  const { greeting } = data;
  return (
    <InvitationWrapper>
      <Paragraph>{greeting.message}</Paragraph>
      <Host />
      <Caption textAlign={'center'}>{greeting.eventDetail}</Caption>
      {/* TODO: 구글캘린더 추가하기 기능을 넣는다면 링크 수정 */}
      <RoundButton
        target="_blank"
        href={`https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
          '인천과 지연, 결혼합니다.',
        )}&dates=20241005T170000/20241005T180000&ctz=Asia/Seoul&details=${encodeURIComponent(
          'https://alpc.co.kr',
        )}&location=${encodeURIComponent('몽펠리에 카페 레스토랑')}`}
        rel="noreferrer">
        구글 캘린더 추가하기
      </RoundButton>
    </InvitationWrapper>
  );
};

export default Invitation;

const InvitationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
