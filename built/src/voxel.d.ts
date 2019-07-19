export declare enum VoxelType {
    DIRT = 0
}
export declare class Voxel {
    type: VoxelType;
    active: boolean;
    constructor(type: VoxelType, active?: boolean);
}
