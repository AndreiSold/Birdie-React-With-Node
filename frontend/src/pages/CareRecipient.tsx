import { useParams } from 'react-router-dom';

const CareRecipient: React.FC = () => {
  const pathParams = useParams() as any;
  return (
    <div>
      Individual care recipient page for id: {pathParams.careRecipientId}
    </div>
  );
};

export default CareRecipient;
