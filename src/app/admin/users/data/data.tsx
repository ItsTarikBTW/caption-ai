import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CheckCircledIcon,
  CircleIcon,
  CrossCircledIcon,
  QuestionMarkCircledIcon,
  StopwatchIcon,
} from "@radix-ui/react-icons"

export const roles = [
  {
    value: "superadmin",
    label: "Super Admin",
  },
  {
    value: "admin",
    label: "Admin",
  },
  {
    value: "user",
    label: "User",
  },
]

export const statuses = [
  {
    value: "active",
    label: "Active",
    icon:  CheckCircledIcon,
  },
  {
    value: "inactive",
    label: "Inactive",
    icon: CircleIcon,
  },
  {
    value: "banned",
    label: "Banned",
    icon:  QuestionMarkCircledIcon,
  },
  {
    value: "suspended",
    label: "Suspended",
    icon: StopwatchIcon,
  },
  {
    value: "deleted",
    label: "Deleted",
    icon: CrossCircledIcon,
  },
]

export const plans = [
  {
    value: "basic",
    label: "Basic",
    icon: ArrowDownIcon,
  },
  {
    value: "pro",
    label: "Pro",
    icon: ArrowRightIcon,
  },
  {
    value: "team",
    label: "Team",
    icon: ArrowUpIcon,
  },
]
