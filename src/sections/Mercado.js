import Section from "../components/Section";
import Card from "../components/Card";

function Mercado() {
  return (
    <Section id="mercado" title="Análise de Mercado">
      <div className="grid-3" style={{ marginTop: '20px' }}>

        <Card>
          <div style={{ padding: '20px', background: '#f8fafc', borderRadius: '16px', marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
            <img
              src="/images/nubank.jpg"
              alt="Nubank"
              style={{ maxHeight: '60px', objectFit: 'contain' }}
            />
          </div>
          <h3 style={{ fontSize: '22px', color: '#0f172a', marginBottom: '12px' }}>Nubank</h3>
          <p style={{ color: '#475569', lineHeight: '1.6', margin: 0 }}>
            Interface simples e objetivos financeiros com "caixinhas".
          </p>
        </Card>

        <Card>
          <div style={{ padding: '20px', background: '#f8fafc', borderRadius: '16px', marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
            <img
              src="/images/warren.jpg"
              alt="Warren"
              style={{ maxHeight: '60px', objectFit: 'contain' }}
            />
          </div>
          <h3 style={{ fontSize: '22px', color: '#0f172a', marginBottom: '12px' }}>Warren</h3>
          <p style={{ color: '#475569', lineHeight: '1.6', margin: 0 }}>
            Investimentos baseados em objetivos de vida e automação.
          </p>
        </Card>

        <Card>
          <div style={{ padding: '20px', background: '#f8fafc', borderRadius: '16px', marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
            <img
              src="/images/rico.jpg"
              alt="Rico"
              style={{ maxHeight: '60px', objectFit: 'contain' }}
            />
          </div>
          <h3 style={{ fontSize: '22px', color: '#0f172a', marginBottom: '12px' }}>Rico</h3>
          <p style={{ color: '#475569', lineHeight: '1.6', margin: 0 }}>
            Educação financeira disponível, mas com interface mais complexa.
          </p>
        </Card>

      </div>
    </Section>
  );
}

export default Mercado;