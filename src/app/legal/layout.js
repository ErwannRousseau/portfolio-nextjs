import BackButton from '@/components/BackButton';

function LegalLayout({ children }) {
  return (
    <>
      <BackButton />
      {children}
    </>
  );
}

export default LegalLayout;
