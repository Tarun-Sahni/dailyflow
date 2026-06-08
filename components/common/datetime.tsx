import { Modal, View, Text, TouchableOpacity } from "react-native";
import DateTimePicker, {
  DateType,
  useDefaultStyles,
} from "react-native-ui-datepicker";

interface DateTimePickerModalProps {
  visible: boolean;
  value?: DateType;
  onClose: () => void;
  onSelect: (date: DateType) => void;
}

export default function DateTimePickerModal({
  visible,
  value,
  onClose,
  onSelect,
}: DateTimePickerModalProps) {
  const defaultStyles = useDefaultStyles();

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
    >
      <View className="flex-1 justify-center bg-black/50 px-6">
        <View className="bg-white dark:bg-neutral-800 rounded-xl p-4">
          <DateTimePicker
            mode="single"
            timePicker
            use12Hours
            date={value}
            onChange={({ date }) => {
              if (date) {
                onSelect(date);
              }
            }}
            styles={defaultStyles}
          />

          <TouchableOpacity
            onPress={onClose}
            className="bg-rose-500 py-3 rounded-xl mt-4"
          >
            <Text className="text-center text-white">
              Done
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}