import { View, StyleSheet, Text } from "react-native";

const PillText = ({children}: {children: React.ReactNode}) => {
    return (
    <View style={styles.pill}>
        <Text style={styles.text}>
            {children}
        </Text>
    </View>
    )
}

export default PillText; 
// <span id="pill-1" class="pill-hover inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium border" style="font-family: 'DM Sans', sans-serif; background-color: rgba(109, 40, 217, 0.1); border-color: rgba(109, 40, 217, 0.3); color: #c4b5fd;">
//  <i data-lucide="zap" style="width:12px; height:12px;"></i> 
// <span class="pill-text">Lightning Fast</span> 
// </span> <span id="pill-2" class="pill-hover inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium border" style="font-family: 'DM Sans', sans-serif; background-color: rgba(109, 40, 217, 0.1); border-color: rgba(109, 40, 217, 0.3); color: #c4b5fd;"> <i data-lucide="shield" style="width:12px; height:12px;"></i> <span class="pill-text">Secure by Default</span> </span> <span id="pill-3" class="pill-hover inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium border" style="font-family: 'DM Sans', sans-serif; background-color: rgba(109, 40, 217, 0.1); border-color: rgba(109, 40, 217, 0.3); color: #c4b5fd;"> <i data-lucide="trending-up" style="width:12px; height:12px;"></i> <span class="pill-text">Built to Scale</span> </span>

const styles = StyleSheet.create({
    pill: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 6,
        borderRadius: 9999,
        fontSize: 12,
        fontWeight: '500',
        fontFamily: 'DM Sans',
        backgroundColor: 'rgba(109, 40, 217, 0.1)',
        borderColor: 'rgba(109, 40, 217, 0.3)',
        borderWidth: 1,
        color: '#c4b5fd'
    },
    text:{
        fontFamily: "DM Sans, sans-serif",
        color: "#c4b5fd",
        fontWeight: 500,
        fontSize: 13
    }
});