import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

export default function Boletim() {
  const [dados, setDados] = useState<any[]>([]);

  useEffect(() => {
    setDados([
      { disciplina: 'Matemática', n1: 8, n2: 7 },
      { disciplina: 'Português', n1: 6, n2: 5 },
    ]);
  }, []);

  return (
    <View style={{ padding: 20 }}>
      {dados.map((item, i) => {
        const media = (item.n1 + item.n2) / 2;
        const situacao = media >= 6 ? 'Aprovado' : 'Reprovado';

        return (
          <Text key={i}>
            {item.disciplina} | Média: {media} | {situacao}
          </Text>
        );
      })}
    </View>
  );
}