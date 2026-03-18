import { View, StyleSheet } from 'react-native';

//   <div class="absolute inset-0 opacity-[0.04]" style="background-image: linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px); background-size: 60px 60px;"></div><!-- Nav -->
const GridBackground = () => {
    return (
        <View style={styles.container}>
            <View style={styles.grid} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        overflow: 'hidden',
    },
    grid: {
        ...StyleSheet.absoluteFillObject,
        opacity: 0.04,
        backgroundColor: 'transparent',
        backgroundImage: `
            linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), 
            linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
    },
});

export default GridBackground;