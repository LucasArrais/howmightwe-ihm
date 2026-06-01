import Section from "../components/Section";
import Card from "../components/Card";

function Referencias() {
  return (
    <Section id="referencias" title="Referências de Engajamento">
      <div className="grid-2" style={{ marginTop: '20px' }}>

        <Card>
          <div style={{ padding: '30px', background: 'linear-gradient(135deg, #f0fdf4, #dcfce7)', borderRadius: '16px', marginBottom: '24px', display: 'flex', justifyContent: 'center' }}>
            <img src="/images/duolingo.png" alt="Duolingo" style={{ maxHeight: '120px', objectFit: 'contain' }} />
          </div>
          <h3 style={{ fontSize: '24px', color: '#10b981', marginBottom: '12px' }}>Duolingo</h3>
          <p style={{ color: '#475569', lineHeight: '1.6', fontSize: '18px', margin: 0 }}>Uso de gamificação, recompensas e micro aprendizado para criar um hábito consistente.</p>
        </Card>

        <Card>
          <div style={{ padding: '30px', background: 'linear-gradient(135deg, #f5f3ff, #ede9fe)', borderRadius: '16px', marginBottom: '24px', display: 'flex', justifyContent: 'center' }}>
            <img src="/images/habitica.png" alt="Habitica" style={{ maxHeight: '120px', objectFit: 'contain' }} />
          </div>
          <h3 style={{ fontSize: '24px', color: '#8b5cf6', marginBottom: '12px' }}>Habitica</h3>
          <p style={{ color: '#475569', lineHeight: '1.6', fontSize: '18px', margin: 0 }}>Transforma hábitos em um sistema de RPG com progressão, mascotes e equipamentos.</p>
        </Card>
      </div>
    </Section>
  );
}

export default Referencias;