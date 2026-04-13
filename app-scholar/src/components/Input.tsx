import { TextInput } from 'react-native';

export default function Input(props: any) {
  return (
    <TextInput
      placeholderTextColor="#888"
      style={{
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 8,
        marginBottom: 10,
        backgroundColor: '#fff',
      }}
      {...props}
    />
  );
}