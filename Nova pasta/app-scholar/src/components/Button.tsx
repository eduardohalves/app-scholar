import { TouchableOpacity, Text } from 'react-native';

export default function Button({ title, onPress }: any) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: '#2e6ef7',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 5,
      }}
    >
      <Text style={{ color: '#fff', fontWeight: 'bold' }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}