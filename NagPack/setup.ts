import { CfnResource, Stack } from 'aws-cdk-lib';
import { IConstruct } from 'constructs';
import {
    NagMessageLevel,
    NagPack,
    NagPackProps,
    NagRuleCompliance,
    NagRuleResult,
    NagRules,
    rules,
} from 'cdk-nag';

export class DemoChecksMax extends NagPack {
    constructor(props?: NagPackProps) {
        super(props);
        this.packName = 'DemoChecksMax';
    }
    public visit(node: IConstruct): void {
        if (node instanceof CfnResource) {
            this.applyRule({
                info: 'TESTESTTESTTEST',
                explanation: 'TESTESTTESTTEST',
                level: NagMessageLevel.ERROR,
                rule: rules.ec2.EC2RestrictedInbound,
                node: node,
            });
        }
    }
}