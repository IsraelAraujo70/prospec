import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import { TeamMemberCard } from '../components/TeamMemberCard';

interface TeamSectionProps {
  onViewAllTeam: () => void;
}

export function TeamSection({ onViewAllTeam }: TeamSectionProps) {
  // Dados dos membros da equipe
  const teamMembers = [
    {
      name: 'Murilo Luiz Borges da Silva',
      role: 'Diretor Presidente',
      imageUrl: '/team/mlbds.jpg',
    },
    {
      name: 'Andréia Antonia Jacon',
      role: 'Diretora Vice-Presidente',
      imageUrl: '/team/aaj.jpg',
    },
    {
      name: 'Bruno Prestimônico Zaneti',
      role: 'Diretor de Marketing',
      imageUrl: '/team/bpz.jpg',
    },
    {
      name: 'Denis dos Santos Brito',
      role: 'Diretor Criativo',
      imageUrl: '/team/dsb.jpg',
    },
  ];

  return (
    <div className="h-full flex flex-col justify-center bg-background text-foreground w-full">
      <div className="container mx-auto px-4 py-16 w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossa Equipe</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conheça os profissionais que fazem parte da Prospec Jr.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <TeamMemberCard
                name={member.name}
                role={member.role}
                imageUrl={member.imageUrl}
              />
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button onClick={onViewAllTeam}>
            Ver equipe completa
          </Button>
        </div>
      </div>
    </div>
  );
} 