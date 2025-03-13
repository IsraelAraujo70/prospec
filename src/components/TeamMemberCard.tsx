import { motion } from 'framer-motion';

interface TeamMemberCardProps {
  name: string;
  role: string;
  imageUrl?: string;
}

export function TeamMemberCard({ name, role, imageUrl }: TeamMemberCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-background rounded-lg shadow-md overflow-hidden h-full flex flex-col"
    >
      <div className="aspect-square bg-muted relative overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-primary/10">
            <span className="text-4xl font-bold text-primary">
              {name.split(' ').map(part => part[0]).join('')}
            </span>
          </div>
        )}
      </div>
      <div className="p-4 flex-grow">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-muted-foreground">{role}</p>
      </div>
    </motion.div>
  );
} 