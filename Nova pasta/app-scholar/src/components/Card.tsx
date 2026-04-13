import { View } from 'react-native';

export default function Card({ children }: any) {
  return (
    <View
      style={{
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#f5f5f5',
        marginBottom: 10,
      }}
    >
      {children}
    </View>
  );
}